import type { DiagnosticQuestion } from "../types/portfolio";

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    question:
      "An AHU supply fan shows OFF while the building is occupied. What should be verified before replacing hardware?",
    answers: [
      {
        text: "Replace the controller immediately",
        correct: false,
      },
      {
        text: "Verify the fan command and sequence conditions",
        correct: true,
      },
      {
        text: "Replace the VFD immediately",
        correct: false,
      },
      {
        text: "Override every point on the AHU",
        correct: false,
      },
    ],
    explanation:
      "First verify whether the system is actually commanding the fan. Occupancy, interlocks, safeties and sequence logic should be checked before assuming hardware has failed.",
  },

  {
    question:
      "The BAS shows a damper at 95% open, but physically the damper is closed. What is a strong diagnostic clue?",
    answers: [
      {
        text: "The temperature sensor must be bad",
        correct: false,
      },
      {
        text: "The actuator or control direction may be reversed",
        correct: true,
      },
      {
        text: "The entire network must be down",
        correct: false,
      },
      {
        text: "The controller needs a factory reset",
        correct: false,
      },
    ],
    explanation:
      "When the physical response is opposite the command, actuator direction, control action or configuration should be investigated.",
  },

  {
    question:
      "Two BACnet MS/TP devices share the same MAC address. What can happen?",
    answers: [
      {
        text: "Communication conflicts and unreliable responses",
        correct: true,
      },
      {
        text: "Higher supply airflow",
        correct: false,
      },
      {
        text: "Incorrect refrigerant charge",
        correct: false,
      },
      {
        text: "Higher transformer voltage",
        correct: false,
      },
    ],
    explanation:
      "Devices on the same MS/TP segment require unique MAC addresses. Duplicate addresses can produce communication conflicts.",
  },

  {
    question:
      "A field device does not respond even though the controller output appears active. What is the best troubleshooting approach?",
    answers: [
      {
        text: "Replace every component in the circuit",
        correct: false,
      },
      {
        text: "Test each segment of the signal path individually",
        correct: true,
      },
      {
        text: "Trust the BAS graphic because the point says ON",
        correct: false,
      },
      {
        text: "Assume mechanical failure",
        correct: false,
      },
    ],
    explanation:
      "Segment-by-segment testing helps isolate whether the failure is at the controller, wiring, relay, power supply or field device.",
  },
];