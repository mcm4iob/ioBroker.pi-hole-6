/**
 * Calculate and output the first 20 prime numbers
 * Each prime number is output on a separate line
 */

/**
 * Check if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is prime, false otherwise
 */
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    
    // Check odd divisors up to square root
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Calculate the first n prime numbers
 * @param {number} count - Number of primes to calculate
 * @returns {number[]} - Array of prime numbers
 */
function calculatePrimes(count) {
    const primes = [];
    let candidate = 2;
    
    while (primes.length < count) {
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
        candidate++;
    }
    
    return primes;
}

// Calculate and output the first 20 prime numbers
const primes = calculatePrimes(20);

// Output each prime number on a separate line
primes.forEach(prime => {
    console.log(prime);
});