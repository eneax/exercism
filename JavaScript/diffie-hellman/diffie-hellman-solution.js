export class DiffieHellman {
  constructor(p, g) {
    if (p < 2 || g < 2 || p <= g) {
      throw new Error("Invalid arguments");
    }
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error("Invalid arguments");
    }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey < 2 || privateKey >= this.p) {
      throw new Error("Invalid private key");
    }
    return this.g ** privateKey % this.p;
  }

  getSecret(publicKey, privateKey) {
    return publicKey ** privateKey % this.p;
  }

  isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
}
