import React from "react";
import { render, screen } from "@testing-library/react";
import ModalComponent from "./index"; // Adjust the import path as needed
import "@testing-library/jest-dom"; // For extra matchers like toBeInTheDocument

describe("ModalComponent", () => {
  it("does not render modal when isOpen is false", () => {
    render(<ModalComponent isOpen={false} onClose={() => {}} />);

    // Assert that the modal does not render
    const modal = screen.queryByRole("dialog"); // Modal is typically a dialog element
    expect(modal).not.toBeInTheDocument();
  });

  it("renders modal when isOpen is true", () => {
    render(<ModalComponent isOpen={true} onClose={() => {}} />);

    // Assert that the modal is rendered
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  it("displays children content inside the modal body", () => {
    const modalContent = "This is the content inside the modal.";

    render(
      <ModalComponent isOpen={true} onClose={() => {}}>
        {modalContent}
      </ModalComponent>
    );

    // Assert that the modal body contains the children content
    expect(screen.getByText(modalContent)).toBeInTheDocument();
  });

  it("does not render modal when isOpen changes from true to false", () => {
    const { rerender } = render(<ModalComponent isOpen={true} onClose={() => {}} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    rerender(<ModalComponent isOpen={false} onClose={() => {}} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
