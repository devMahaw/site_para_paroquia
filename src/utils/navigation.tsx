import { To, useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path: To) => {
    navigate(path);
  };

  return { goTo };
};

export default useNavigation;
