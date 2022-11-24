alt + shifht + fleche => déplace des ligne
ctrl + d => ajoute des curseur
alt + click => pour ajouter des curseur

# type

Num
string
boolean
BigInt => nombre > 2^53
undefined:
null: ""
any: on sais pas quelle est le type
unknown: préciser plus tard le type (utilisé le typeof)

let numberOrString: number | string
function name (param1: string): string {
return param1;
}

function name (param1: type, ...param2:type[]): type {
}

# compiler

ts-node `fichier`
