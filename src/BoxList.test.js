import React from "react"; 
import {render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
})

it("matches snapshot", function () {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add new box", function () {
    const {queryByText, getByPlaceholder} = render(<BoxList />)
    const colorInput = getByPlaceholder("Box Color");
    const widthInput = getByPlaceholder("Width");
    const heightInput = getByPlaceholder("Height");
    const btn = queryByText("Add Box");
    // expect(queryByText('Make breakfast')).not.toBeInTheDocument();
    fireEvent.change(colorInput, {target: {value: '#8A2BE2'}})
    fireEvent.change(widthInput, {target: {value: '50'}})
    fireEvent.change(heightInput, {target: {value: '50'}})
    fireEvent.click(btn);
    // expect(queryByText('Make breakfast')).toBeInTheDocument();
})