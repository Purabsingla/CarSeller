import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function Cards(props) {
  return (
    <>
      <Card
        key={props._id}
        className=" max-w-[26rem] m-4 w-[50rem] h-[37rem] flex flex-col"
        onMouseEnter={(e) => {
          e.currentTarget.querySelector("img").src = props.image[1];
        }}
        onMouseLeave={(e) => {
          e.currentTarget.querySelector("img").src = props.image[0];
        }}
      >
        <CardHeader floated={false} color="blue-gray">
          <img
            src={props.image[0]}
            alt="ui/ux review check"
            className="bg-white p-3 w-full h-[280px] object-contain"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex justify-between flex-1">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {props.name}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </Typography>
          </div>
          <Typography color="gray">{props.discription}</Typography>
          <Typography color="gray" className="font-bold text-xl">
            $20,000
          </Typography>
        </CardBody>
        <CardFooter className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Button
            fullWidth
            size="lg"
            className="font-Merriweather font-semibold text-sm"
          >
            Reserve
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
export default Cards;
