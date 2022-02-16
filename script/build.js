var fs = require("fs");

const path = require("path");
const pathRoot = path.resolve(__dirname, "..");
const baseUrl = path.normalize(
  `${pathRoot}/node_modules/bootstrap-icons/icons/`
);

const writeFileDir = path.normalize(
  `${pathRoot}/projects/gt-bootstrap-icons/src/lib`
);

const writeFileIconDir = path.normalize(
  `${pathRoot}/projects/gt-bootstrap-icons/src/lib/icons`
);

var svgDir = fs.readdirSync(baseUrl);

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

    let element = `
      export const Bi${letterName} = \`${svgElement}\`
    `;

    fs.writeFileSync(`${writeFileDir}/icons/bi-${name}.ts`, element);
  }

  let iconsModules = `
    import { NgModule } from '@angular/core';


    @NgModule({
      declarations: [
      ],
      imports: [
      ],
      exports: [
      ]
    })
    export class GtBootstrapIconsModule { }
  `;

  fs.writeFileSync(
    `${writeFileDir}/gt-bootstrap-icons.module.ts`,
    iconsModules
  );
});

console.log("finish");
