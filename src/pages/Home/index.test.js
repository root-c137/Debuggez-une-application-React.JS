import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed",  async () => {

    render(<Home />);
    const Container = screen.getByTestId("events");
    expect(Container).toBeInTheDocument();
  })
  it("a list a people is displayed", async () => {
    render(<Home />);
    const Container = screen.getByTestId("ListPeople");
    expect(Container.childElementCount).toEqual(6);
  })
  it("a footer is displayed", async () => {
    render(<Home />);
    const Footer = screen.getByTestId("Footer");
    expect(Footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home/>);
    const Footer = screen.getByTestId("Footer");
    const LastCard = Footer.firstChild.getElementsByTagName('div')[0];
    expect(LastCard).toBeInTheDocument();

  })
});
