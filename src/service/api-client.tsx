import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "465b2741b26b437792112c1e65eb113d",
  },
});
