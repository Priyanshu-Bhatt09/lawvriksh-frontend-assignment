# Micro-interactions & Design Notes

This document maps the implemented micro-interactions to their purpose and the UX principles they support.

---

### Component: Global (`.card`)

* **Interaction:** Card lifts on hover.
* **Implementation:** `transition: all 0.3s ease;` and `.card:hover { transform: translateY(-2px); box-shadow: 0px 10px 24px rgba(26, 26, 26, 0.06); }`
* **Purpose:** **Feedback & Affordance.** Provides immediate, physical-feeling feedback that the element is "live" and interactive. It reinforces that the card is a distinct object from the background, subtly inviting interaction.

---

### Component: `Sidebar.jsx`

* **Interaction (1):** "Create new project" button hover.
* **Implementation:** `transition: background-color 0.3s ease;` on `.create-project-btn`. A hover state (e.g., a darker orange like `#E86A13`) provides feedback.
* **Purpose:** **Feedback (Fitts's Law).** Confirms to the user that their cursor is on the primary CTA and it is ready to be activated.

* **Interaction (2):** Navigation link hover state.
* **Implementation:** `.nav-link:hover { background-color: var(--bg-color); color: var(--text-primary); }`
* **Purpose:** **Feedback.** A simple, low-friction way to show which item is about to be selected.

* **Interaction (3):** Navigation link active state.
* **Implementation:** `.nav-link.active { background-color: var(--brand-light); color: var(--brand-primary); }`
* **Purpose:** **Signposting (Orientation).** This is a critical micro-interaction that shows the user "You are here." It reduces cognitive load by instantly answering the user's location within the app.

---

### Component: `TodayTask.jsx`

* **Interaction (1):** Task tab active state.
* **Implementation:** `.task-tab.active { color: var(--brand-primary); border-bottom-color: var(--brand-primary); }`
* **Purpose:** **Signposting.** Similar to the sidebar's active link, this shows the user which filter is currently active, preventing confusion.

* **Interaction (2):** Task checkbox click.
* **Implementation:** An `onClick` handler in React would toggle the task's status, which conditionally renders the `FiCircle` or `FiCheckCircle` icon and adds the `.approved` class.
* **Purpose:** **Direct Manipulation & Feedback.** The UI provides an instant and obvious state change (empty circle to checked green circle) in response to a user's direct action.

* **Interaction (3):** Color-coded status badges.
* **Implementation:** `.status-badge` with modifier classes like `.status-approved`, `.status-in-review`.
* **Purpose:** **Aesthetic-Usability Effect & Information Surfacing.** While not a traditional "interaction," the use of color allows the user to scan the list and understand the *state* of tasks without reading every word. This drastically speeds up information processing (Green = good, Blue = in progress, etc.).

---

### Component: `OverallProgress.jsx`

* **Interaction:** Circular progress bar animates on load.
* **Implementation:** Handled by the `react-circular-progressbar` library, configured with `pathTransitionDuration: 0.5`.
* **Purpose:** **Delight & Focus.** The subtle animation draws the user's eye to this key metric (72% Completed). It makes the data feel dynamic and adds a small amount of "delight," which can make the app feel more polished and responsive.

---

### Component: `ProjectSummary.jsx`

* **Interaction:** Color-coded status and progress bars.
* **Implementation:** Helper functions (`getStatusClass`, `getProgressColor`) apply styles based on project status (e.g., "Completed" status gets a green badge and a green progress bar).
* **Purpose:** **Information Surfacing.** Same as the task badges, this allows a manager to scan the entire project list and immediately identify problems. A red "Delayed" or "At risk" badge and progress bar are instantly identifiable, supporting the **Law of Proximity** (grouping the status badge and its corresponding progress bar by color).