import { Link } from "react-router-dom";

export default function LangLink({ to, ...rest }) {
  return <Link to={to} {...rest} />;
}
