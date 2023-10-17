import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "../TaskCard";

test("TaskCard renders correctly", () => {
  const task = {
    id: "1",
    title: "Test Task",
    done: false,
    description: "Test Description",
    createdAt: new Date(),
  };

  render(<TaskCard task={task} />);

  expect(screen.getByText("Test Task")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).toBeDisabled();

  setTimeout(() => {
    expect(checkbox).not.toBeDisabled();
  }, 501);
});
