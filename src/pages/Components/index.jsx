import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { TextField } from "../../components/ui/Inputs/TextField";
import { useDebounce } from "../../hooks/useDebounce";

export const Component = () => {
    const [textValue, setTextValue] = useState("");
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleTextChange = (newValue) => {
        setTextValue(newValue);

        if (newValue.length < 5) {
            setError(true);
        } else {
            setError(false);
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const resultSearch = useDebounce(textValue, 1000);

    console.log(resultSearch);
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    gap: 30,
                    background:
                        "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
                    padding: "40px",
                }}>
                <Button variant="default" size="small" color="main">
                    Join the community
                </Button>
                <Button variant="primary" size="large" color="blue">
                    Explore Now
                </Button>
                <Button
                    variant="icon"
                    icon={"bx:right-arrow-circle"}
                    size="large"
                    color="transparent">
                    View Intro
                </Button>
                <Button
                    icon={"bx:right-arrow-circle"}
                    variant="icon"
                    size="medium"
                    color="white">
                    View More
                </Button>
                <Button
                    icon={"bx:right-arrow-circle"}
                    variant="icon"
                    size="circle"
                    color="white"></Button>
            </div>
            <div style={{ margin: "0 100px" }}>
                <TextField
                    label="Password"
                    id="password"
                    required={true}
                    helperText="Please enter your password"
                    error={error}
                    success={textValue.length >= 5}
                    value={textValue}
                    onChange={handleTextChange}
                    type={showPassword ? "text" : "password"}
                    className="customClassName"
                    showIcon={true}
                    icon={
                        showPassword ? "ri:eye-fill" : "humbleicons:eye-close"
                    }
                    onClickIcon={togglePasswordVisibility}
                />
            </div>
        </div>
    );
};
