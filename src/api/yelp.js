import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer pjmjcH0jTot8iw6ONkGEklzfmRKOtUGgJCn9V46GBqq-2hBe1sMSVZHbkDm-x0znri5CrClAsBbmnJywVueEA3vkZs1ueCesQhuvJDtJS9R4SSM9eMbZaSw9bCn-ZHYx",
  },
});
