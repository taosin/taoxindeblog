let OSS = require("ali-oss");

let client = new OSS({
  region: "shanghai",
  accessKeyId: "LTAIXaWrylXKF9Ez",
  accessKeySecret: "VQJAS9B0w4YjJ9qXiXXw9erEgPSoWC",
  bucket: "taoxindeblog",
});

async function putBuffer() {
  try {
    let result = await client.put("object-name", new Buffer("hello world"));
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

putBuffer();
