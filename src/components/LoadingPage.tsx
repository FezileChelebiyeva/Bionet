import { FallingLines, Rings } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div
      className="laodingPage"
      style={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        color: "red",
      }}
    >
      <FallingLines color="#01c3cd" width="200" visible={true} />
    </div>
  );
};
export default LoadingPage;
