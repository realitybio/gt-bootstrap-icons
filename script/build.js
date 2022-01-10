var fs = require("fs");

const path = require("path");
const pathRoot = path.resolve(__dirname, "..");
const baseUrl = path.normalize(
  `${pathRoot}/node_modules/bootstrap-icons/icons/`
);
const writeFileBaseDir = path.normalize(
  `${pathRoot}/projects/gt-bootstrap-icons/src/`
);

const writeFileDir = path.normalize(
  `${pathRoot}/projects/gt-bootstrap-icons/src/lib`
);

const writeFileIconDir = path.normalize(
  `${pathRoot}/projects/gt-bootstrap-icons/src/lib/icons`
);
var svgDir = fs.readdirSync(baseUrl);

let importCom = "";
let declarCom = "";
let exprtCom = `
              /*
              * Public API Surface of gt-bootstrap-icons
              */

              export * from './lib/gt-bootstrap-icons.service';
              export * from './lib/gt-bootstrap-icons.component';
              export * from './lib/gt-bootstrap-icons.module';

              `;

if (!fs.existsSync(writeFileIconDir)) {
  fs.mkdirSync(`${pathRoot}/projects/gt-bootstrap-icons/src/lib/icons`);
}

svgDir.forEach((file) => {
  if (file.indexOf(".svg") !== -1) {
    const name = file.split(".")[0];

    let letterName = "";
    nameList = name.split("-");
    nameList.forEach((ele) => {
      letterName += ele[0].toLocaleUpperCase() + ele.slice(1);
    });

    let dir = `${baseUrl}/${file}`;

    var svgElement = fs.readFileSync(dir);

    const componentName = `Bi${letterName}Component`;

    importCom += `import { ${componentName} } from './icons/bi-${name}';`;

    exprtCom += `export * from './lib/icons/bi-${name}';`;

    declarCom += `${componentName},`;

    let Component = `
    import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'bi-${name}, i[icon="bi-${name}"]',
        template: \`${svgElement}\`,
      })
      export class ${componentName} implements OnInit {

        constructor() { }

        ngOnInit(): void {}

      }
    `;

    fs.writeFileSync(`${writeFileDir}/icons/bi-${name}.ts`, Component);
  }

  let iconsModules = `
    import { NgModule } from '@angular/core';
    ${importCom}


    @NgModule({
      declarations: [
        ${declarCom}
      ],
      imports: [
      ],
      exports: [
        ${declarCom}
      ]
    })
    export class GtBootstrapIconsModule { }
  `;

  fs.writeFileSync(
    `${writeFileDir}/gt-bootstrap-icons.module.ts`,
    iconsModules
  );

  fs.writeFileSync(`${writeFileBaseDir}/public-api.ts`, exprtCom);
});

console.log("finish");
