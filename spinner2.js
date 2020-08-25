const spins = "|/-\\|/-\\|/-\\|/";

let i = 0;
const spinner = () => {
  if (i < spins.length - 1) {
    process.stdout.write('\r' + spins[i] +'   ');
    i++;
    setTimeout(spinner, 200);
  } else if (i === spins.length - 1)
  {
    process.stdout.write("\n");
  }
}

spinner()

