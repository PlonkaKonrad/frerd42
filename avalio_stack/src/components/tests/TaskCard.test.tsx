import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TaskCard from "../TaskCard";

const mockStore = configureStore();

describe("TaskCard component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({});
  });

  it("renders TaskCard correctly", () => {
    const task = {
      id: "1",
      title: "Test Task",
      description: "This is a test task",
      createdAt: new Date(),
      done: false,
    };

    const { getByText } = render(
      <Provider store={store}>
        <TaskCard task={task} />
      </Provider>
    );

    expect(getByText("Test Task")).toBeInTheDocument();
    expect(getByText("This is a test task")).toBeInTheDocument();
  });
});
