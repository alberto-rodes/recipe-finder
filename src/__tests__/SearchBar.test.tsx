import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { SearchBar } from "@/components";

jest.useFakeTimers();

describe("SearchBar", () => {
  it("renders text field", () => {
    render(<SearchBar onSearch={jest.fn()} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("calls onSearch with debounce when input changes", () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "pasta" } });

    act(() => {
      jest.runAllTimers();
    });

    expect(onSearchMock).toHaveBeenCalledWith("pasta");
  });
});
