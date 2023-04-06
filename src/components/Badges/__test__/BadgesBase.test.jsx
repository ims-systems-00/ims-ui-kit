import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "../BadgeBase";
import FadeBadges from "../Examples/FadeBadges";
import OutlineBadges from "../Examples/OutlineBadges";

describe("Badges component", () => {
  test("renders with default props", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toBeInTheDocument();
  });

  test("renders with custom props", () => {
    render(<Badge outline="primary">Custom</Badge>);
    const badge = screen.getByText(/Custom/i);
    expect(badge).toHaveClass("badge-outline-primary");
  });

  test("renders with fade props", () => {
    render(<Badge fade="primary">Fade</Badge>);
    const badge = screen.getByText(/Fade/i);
    expect(badge).toHaveClass("badge-fade-primary");
  });

  test("renders with outline props", () => {
    render(<Badge outline="primary">Outline</Badge>);
    const badge = screen.getByText(/Outline/i);
    expect(badge).toHaveClass("badge-outline-primary");
  });

  test("renders all fade badges", () => {
    render(<FadeBadges />);
    const primaryBadge = screen.getByText(/Primary/i);
    const infoBadge = screen.getByText(/Info/i);
    const secondaryBadge = screen.getByText(/Secondary/i);
    const successBadge = screen.getByText(/Success/i);
    const dangerBadge = screen.getByText(/Danger/i);
    const warningBadge = screen.getByText(/Warning/i);
    const darkBadge = screen.getByText(/Dark/i);
    const pendingBadge = screen.getByText(/Pending/i);

    expect(primaryBadge).toBeInTheDocument();
    expect(infoBadge).toBeInTheDocument();
    expect(secondaryBadge).toBeInTheDocument();
    expect(successBadge).toBeInTheDocument();
    expect(dangerBadge).toBeInTheDocument();
    expect(warningBadge).toBeInTheDocument();
    expect(darkBadge).toBeInTheDocument();
    expect(pendingBadge).toBeInTheDocument();
  });

  test("renders all outline badges", () => {
    render(<OutlineBadges />);
    const primaryBadge = screen.getByText(/Primary/i);
    const infoBadge = screen.getByText(/Info/i);
    const secondaryBadge = screen.getByText(/Secondary/i);
    const successBadge = screen.getByText(/Success/i);
    const dangerBadge = screen.getByText(/Danger/i);
    const warningBadge = screen.getByText(/Warning/i);
    const darkBadge = screen.getByText(/Dark/i);
    const pendingBadge = screen.getByText(/Pending/i);

    expect(primaryBadge).toBeInTheDocument();
    expect(infoBadge).toBeInTheDocument();
    expect(secondaryBadge).toBeInTheDocument();
    expect(successBadge).toBeInTheDocument();
    expect(dangerBadge).toBeInTheDocument();
    expect(warningBadge).toBeInTheDocument();
    expect(darkBadge).toBeInTheDocument();
    expect(pendingBadge).toBeInTheDocument();
  });
});
