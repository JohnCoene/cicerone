/*
 * Helper to make timeouts longer for CI environments
 */

module.exports = function ms (duration) {
  return process.env.CI ? duration * 5 : duration
}
