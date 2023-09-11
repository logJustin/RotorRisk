
// DO
//     RCOP Form: Form Validation
//     RCOP Form: Add Fighter Management
//     RCOP Form: Change the select one sections to a different format
//       (requires a change to each state, consider how riskLookup works, how they're rendered on FlightsList)
//       Form Sections to reflect this:
//         CrewMember Recency
//         Specific Vague Planning
//     Multi-section: Authentication
//     App: Add a secondary color // explore theme palette
//     App: Deploy


// COMPLETED
//  ✓  RCOP Form: Change Lunar Data to Binary
//  ✓  RCOP Form: Add ETD & ETE on 5484
//  ✓  RCOP Form: Change CheckboxBinary to Yes/No
//  ✓  FlightsList: Refactor the seederData format & how it renders
//  ✓  RCOP Form: AMBO & FMAA Comments update the same value
//  ✓  FlightsList: Residual Risk and Weather Mitigated Risk update the same value
//  ✓  FlightsList: Delete unnecessary imports on the Tabs
//  ✓  RCOP Form: Add hours look up function and display on the FormModal
//  ✓  FlightsList: Implement Yes/No logic for the riskMatrix
//  ✓  FlightsList: Implement RiskLookupValue on utils & implement how to update categorical risks
//  ✓  FlightsList: Implement Mission Risk update
//  ✓  FlightsList: Evalute NG risk, not only overall aircraft risk
//  ✓  FlightsList: Implement 25 Hours AO consideration for NG and Aircraft Risk Lookups
//  ✓  FlightsList: Hoist > 30/60/90 doesn't return a color on FlightsList
//  ✓  FlightsList: Edit RCOP button functionality
//  ✓  FlightsList: File vs Update RCOP button text
//  ✓  FlightsList: Change collapse functionality to rid error, each subcomponent would need to be it's own table
//  ✓  FlightsList: Breakout the subtables into their own components
//  ✓  Multi-section: Combine App & Main jsx
//  ✓  RCOP Form: Binary checkboxes don't allow unclick
//  ✓  RCOP Form: Adjust selected risks depending on the Initial Risk
//  ✓  RCOP Form: Reset TailNumber when AircraftType Changes
//  ✓  RCOP Form: Margin bottom on File RCOP Button
//  ✓  RCOP Form: Insert Delete icon to clear a NRCM field
//  ✓  RCOP Form: Validate risks with 12 CAB RCOP
//  ✓  RCOP Form: Update Crews and Tail Numbers
//  ✓  RCOP Form: Add UUID to crewmembers
//  ✓  Backend: Create aircrews database & implement it
//  ✓  Backend: Fetch flights on app load
//  ✓  Backend: Get flights into DB
//  ✓  Backend: Put request edit flights
//  ✓  Backend: Sort flights by flight date upon fetch
//  ✓  Backend: Change edit to icon
//  ✓  FlightsList: Add delete column & write functionality
//  ✓  Backend: Implement pool.connect on server instead of backendFunctions
//  ✓  Multi-section: Add react-snackbar for flight add, edit, and delete (probably from layout for Modal Tabs & FlightsList)
//  ✓  Multi-section: Figure out why snackbar for delete closes after a couple seconds, maybe move the state??
//  ✓  Crewmember Form: Form to add a new cremember
//  ✓  Crewmember Form: Implement add or edit toggle in crewmember form
//  ✓  Crewmember Form: Write logic that narrows down available crewmembers on edit form based on aircraft, position, then name
//  ✓  Crewmember Form: Disable other fields until an aircraft, then position, then name is selected
//  ✓  Crewmember Form: don't let somebody input a Apache NRCM
//  ✓  Crewmember Form: PUT & POST request
//  ✓  Make backend :(
//  ✓  Crewmember Form: Add Snackbar for add and edit crewmembers
//  ✓  Crewmember Form: Close Manage crewmembers
//  ✓  Crewmember Form: Add spinner until post/put complete
//  ✓  Multi-section: Sort aircrews fetch by name
//  ✓  RCOP Form: Filter crewmembers by airframe
//  ✓  RCOP Form: Add Crews for other Airframes & logic for the correct aircrews to appear
//  ✓  Delete Flight Modal: Change Table to Grid v2 for more responsivity
//  ✓  Crewmember Form: Allow name to be edited, change to an Autocomplete component
//  ✓  Crewmember Form: Reset fields on switching modes & submitting form
//  ✓  RCOP Form: Add spinner until post/put complete
//  ✓  Delete Flight Modal: Change alert snackbar to be the component from Layouts
//  ✓  Delete Flight Modal: Make it a Modal actual
//  ✓  Delete Flight Modal: Add the inherit styling to the modal
//  ✓  RCOP Form: Add close button to top right
//  ✓  FlightsList: Add skeleton until load
//  ✓  FlightsList: Reduce size of 4 Category Headers
//  ✓  RCOP Form: Change button to disabled unless scrolled at bottom
//  ✓  RCOP Form: Change button to redirect to next tab
//  ✓  RCOP Form: Auto-scroll up
//  ✓  Multi-section: Write functionality for Brief and Approve buttons in LeftNavigation
//  ✓  Multi-section: Add floating action button for user suggestions