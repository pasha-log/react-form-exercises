import React from "react"; 
import {render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "./TodoList";

it("renders without crashing", function () {
    render(<TodoList />);
})

it("matches snapshot", function () {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add new todo", function () {
    const {queryByText, getByLabelText} = render(<TodoList />)
    const input = getByLabelText("Add Todo");
    const btn = queryByText("Create Todo");
    expect(queryByText('Make breakfast')).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: 'Make breakfast'}})
    fireEvent.click(btn);
    expect(queryByText('Make breakfast')).toBeInTheDocument();
})