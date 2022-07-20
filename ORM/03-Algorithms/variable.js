
const variableMaker = (str) => {
    if (/^[\w\s]+$/.test(str)) {
        return str.toLowerCase().split(' ').join('');
    }
    return 'Enter a valid variable name!';
};

console.log('*' + variableMaker('Tammer Galal') + '*');
console.log('*' + variableMaker('WaLO  KE kd') + '*');
console.log('*' + variableMaker('   WaLO  KE kd   ') + '*');
console.log('*' + variableMaker('   Wa!O  KE kd   ') + '*');