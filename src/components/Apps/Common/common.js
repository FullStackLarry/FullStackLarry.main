import { toast } from "react-toastify";

export const toastifyOptions = {
  theme: "colored",
  position: toast.POSITION.TOP_CENTER,
  pauseOnHover: false,
};

export const inputDate = (date) => {
  if (!date) return "";

  const dt = new Date(date);
  const m = dt.getMonth() + 1;
  const d = dt.getDate() + 1;
  const y = dt.getFullYear();
  return (
    y.toString() +
    "-" +
    m.toString().padStart(2, "0") +
    "-" +
    d.toString().padStart(2, "0")
  );
};
