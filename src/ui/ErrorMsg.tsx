interface Iprops {
  msg: string;
}

const ErrorMsg = ({ msg }: Iprops) => {
  return msg ? (
    <p className="text-red-600 text-sm block font-semibold">{msg}</p>
  ) : null;
};

export default ErrorMsg;
