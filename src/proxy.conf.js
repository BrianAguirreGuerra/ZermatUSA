const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:7088",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
