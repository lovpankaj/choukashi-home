"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const screens = [
  {
    label: "Inbox",
    title: "The chat and the customer’s details, together.",
    description:
      "Read the chat, check the visit and see what needs an answer. Your team does not have to look in three places.",
    src: "/screenshots/inbox-current.png",
    width: 1680,
    height: 1028,
    alt: "Current Choukashi inbox showing a demo conversation alongside the customer's needs, visit and staff preparation.",
    note: "From the app on 22 October 2026. Names, chats and visits are made-up demo details.",
  },
  {
    label: "Lead brief",
    title: "Know the customer before they walk in.",
    description:
      "See what the customer wants, their open questions, the visit and what staff need to prepare.",
    src: "/screenshots/lead-brief-current.png",
    width: 900,
    height: 875,
    alt: "Current lead detail panel showing Priya's demo visit, Activa exchange, daily travel, EMI question and preparation checklist.",
    note: "A real app screen with made-up demo details.",
  },
  {
    label: "Visits",
    title: "See who is coming this week.",
    description:
      "Check booked visits and who is coming next. Open the customer’s details to get ready.",
    src: "/screenshots/visits-current.png",
    width: 1680,
    height: 1028,
    alt: "Current Choukashi visits calendar with a week of synthetic showroom appointments and an upcoming visits list.",
    note: "A real app screen with demo visits. No real customer details are shown.",
  },
  {
    label: "Reports",
    title: "How is the showroom doing?",
    description:
      "See new enquiries and bookings each day. Know how many chats led to a visit.",
    src: "/screenshots/reports-overview-current.png",
    width: 1298,
    height: 680,
    alt: "Choukashi owner report showing new leads, visits booked, booking rate and a daily leads-and-visits chart.",
    note: "Report shared by the owner on 20 October 2026. Its dates and numbers differ from the 10-day totals above.",
  },
  {
    label: "Lead journey",
    title: "Find where customers need help.",
    description:
      "See where customers stop replying, what they ask and who seems ready to buy. Check what happened to their bookings.",
    src: "/screenshots/reports-journey-current.png",
    width: 1293,
    height: 766,
    alt: "Owner reports showing the customer engagement funnel, questions needing staff, lead warmth and visit outcomes.",
    note: "Report shared by the owner. It shows a different date range and has no customer names.",
  },
  {
    label: "Response & language",
    title: "Know when customers write.",
    description:
      "Check the busy hours, customer languages and reply speed. See which of your first messages were read and answered.",
    src: "/screenshots/reports-response-current.png",
    width: 1284,
    height: 860,
    alt: "Owner reports showing languages, a weekly message heatmap, response-time distributions and outbound-message delivery stages.",
    note: "Report shared by the owner. These languages show that business’s chats, not every language Choukashi supports.",
  },
];

export function ProductScreens() {
  const [index, setIndex] = useState(0);
  const [actualSize, setActualSize] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const screen = screens[index];
  return (
    <div className="product-screens">
      <div
        className="screen-tabs"
        role="tablist"
        aria-label="Explore the current app"
      >
        {screens.map((item, i) => (
          <button
            key={item.label}
            ref={(element) => {
              tabs.current[i] = element;
            }}
            type="button"
            id={`screen-tab-${i}`}
            role="tab"
            aria-selected={index === i}
            aria-controls="screen-panel"
            tabIndex={index === i ? 0 : -1}
            onClick={() => setIndex(i)}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight"
                  ? (i + 1) % screens.length
                  : event.key === "ArrowLeft"
                    ? (i + screens.length - 1) % screens.length
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? screens.length - 1
                        : null;
              if (next !== null) {
                event.preventDefault();
                setIndex(next);
                tabs.current[next]?.focus();
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        id="screen-panel"
        role="tabpanel"
        aria-labelledby={`screen-tab-${index}`}
        tabIndex={0}
      >
        <div className="screen-description">
          <div>
            <h3>{screen.title}</h3>
            <p>{screen.description}</p>
          </div>
          <button
            type="button"
            className="screen-expand"
            onClick={() => {
              setActualSize(false);
              dialog.current?.showModal();
            }}
          >
            View full size <span aria-hidden="true">⤢</span>
          </button>
        </div>
        <button
          type="button"
          className={`screen-preview ${index === 1 ? "brief-preview" : ""}`}
          onClick={() => {
            setActualSize(false);
            dialog.current?.showModal();
          }}
          aria-label={`Enlarge ${screen.label.toLowerCase()} screenshot`}
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            unoptimized
            sizes="(max-width: 700px) 100vw, 1240px"
          />
        </button>
        <p className="screen-note">{screen.note}</p>
      </div>
      <dialog
        ref={dialog}
        className="screen-dialog"
        aria-labelledby="screenshot-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="screen-dialog-inner">
          <div className="screen-dialog-toolbar">
            <h3 id="screenshot-dialog-title">{screen.label}</h3>
            <div>
              <button
                type="button"
                aria-pressed={actualSize}
                onClick={() => setActualSize(!actualSize)}
              >
                {actualSize ? "Fit to screen" : "Zoom in"}
              </button>
              <button
                type="button"
                aria-label="Close screenshot"
                onClick={() => dialog.current?.close()}
              >
                ✕
              </button>
            </div>
          </div>
          <div className="screen-dialog-scroll">
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              unoptimized
              style={{
                width: actualSize ? screen.width : "100%",
                maxWidth: actualSize ? "none" : "100%",
                height: "auto",
              }}
            />
          </div>
          <p>
            {actualSize
              ? "Scroll to explore the enlarged screenshot. "
              : "Use zoom to read the smaller details. "}
            {screen.note}
          </p>
        </div>
      </dialog>
    </div>
  );
}
