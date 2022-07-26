import Lottie from "react-lottie";
import animation from "assets/animation/animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function AnimatedCart() {
  return <Lottie options={defaultOptions} height={50} width={60} />;
}
