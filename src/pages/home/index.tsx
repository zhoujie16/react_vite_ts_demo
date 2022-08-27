import { Button } from "react-vant";
import { useNavigate } from "react-router-dom";
const Index = () => {
  let navigate = useNavigate();
  let list: any = [
    {
      title: "Demo1",
      fn: () => {
        navigate("/Demo1");
      },
    },
    {
      title: "Demo2",
      fn: () => {
        navigate("/Demo2");
      },
    },
    {
      title: "Demo3",
      fn: () => {
        navigate("/Demo3");
      },
    },
  ];
  return (
    <>
      {list.map((x, i) => (
        <Button key={i} block onClick={x.fn}>
          {x.title}
        </Button>
      ))}
    </>
  );
};

export default Index;
