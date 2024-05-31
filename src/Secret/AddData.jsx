import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TemporaryDrawer from "./SideBar";

function AddAndModifyData() {
  // const [file, setFile] = useState(null);
  // const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [age, setAge] = useState("");
  // function handlefile(event) {
  //   console.log(event.target.files[0]);
  //   setFile(event.target.files[0]);
  // }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  }

  function PostApi() {
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("name", name);
    // alert("press enter to continue...");
    // fetch("http://localhost:3001/testdata", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("response from server is ", data);
    //     // setData(data.FindOutput);
    //   });
    console.log(data);
  }

  return (
    <>
      <div className="mt-8">
        <div className="font-Merriweather font-bold text-3xl flex justify-center mb-10">
          Insert Cars Data
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col mr-6">
            <TextField
              id="outlined-basic"
              label="Car Category"
              variant="outlined"
              name="Car Category"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Car Brand"
              variant="outlined"
              name="Car Brand"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Car Name"
              variant="outlined"
              name="Car Name"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Car Model"
              variant="outlined"
              name="Car Model"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <FormControl sx={{ width: 400, marginBottom: 4 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem>Zero</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Engine"
              variant="outlined"
              name="Engine"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col ml-6">
            <TextField
              id="outlined-basic"
              label="Mileage"
              variant="outlined"
              name="Mileage"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Air Bags"
              variant="outlined"
              name="Air Bags"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Transmission"
              variant="outlined"
              name="Transmission"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Fuel Type"
              variant="outlined"
              name="Fuel Type"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Abs"
              variant="outlined"
              name="Abs"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Power Windows"
              variant="outlined"
              name="Power Windows"
              sx={{ width: 400, marginBottom: 4 }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" absolute top-[80%] left-[46%]">
          <Button
            color="secondary"
            variant="contained"
            onClick={PostApi}
            sx={{ top: 25, right: 10 }}
          >
            Secondary
          </Button>
          {/* <input type="file" onChange={handlefile} /> */}
        </div>
        <div className="absolute top-[3%] left-7">
          <TemporaryDrawer />
        </div>
        <div>
          <input type="file" multiple="multiple" />
        </div>
      </div>
    </>
  );
}
export default AddAndModifyData;
