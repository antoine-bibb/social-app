import * as yup from "yup";

export default yup.object().shape({
  img_url: yup.string().required("image url is required.").url(),
  title: yup.string().required("a title is required"),
  body: yup.string(),
});
