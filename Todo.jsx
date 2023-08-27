
// DO
//     Write logic that narrows down available crewmembers on edit form based on aircraft, position, then name
//     Disable other fields until an aircraft, then position, then name is selected
//     Add floating action button for user suggestions
//     Add Crews for other Airframes & logic for the correct aircrews to appear
//     Change the select one sections to a different format
//       (requires a change to each state, consider how riskLookup works, how they're rendered on FlightsList)
//       Form Sections to reflect this:
//         CrewMember Recency
//         Specific Vague Planning
//     Form Validation
//     Write functionality for Brief and Approve buttons in LeftNavigation
//     Add Fighter Management
//     Make backend :(


// COMPLETED
//  ✓  Change Lunar Data to Binary
//  ✓  Add ETD & ETE on 5484
//  ✓  Change CheckboxBinary to Yes/No
//  ✓  Refactor the seederData format & how it renders on FlightsList
//  ✓  MBO & FMAA Comments update the same value
//  ✓  Residual Risk and Weather Mitigated Risk update the same value
//  ✓  Delete unnecessary imports on the Tabs
//  ✓  Add hours look up function and display on the FormModal
//  ✓  Implement Yes/No logic for the riskMatrix
//  ✓  Implement RiskLookupValue on utils & implement how to update categorical risks
//  ✓  Implement Mission Risk update
//  ✓  Evalute NG risk, not only overall aircraft risk
//  ✓  Implement 25 Hours AO consideration for NG and Aircraft Risk Lookups
//  ✓  Hoist > 30/60/90 doesn't return a color on FlightsList
//  ✓  Edit RCOP button functionality
//  ✓  File vs Update RCOP button text
//  ✓  Change collapse functionality to rid error, each subcomponent would need to be it's own table
//  ✓  Breakout the subtables into their own components
//  ✓  Combine App & Main jsx
//  ✓  Binary checkboxes don't allow unclick
//  ✓  Adjust selected risks depending on the Initial Risk
//  ✓  Reset TailNumber when AircraftType Changes
//  ✓  Margin bottom on File RCOP Button
//  ✓  Insert Delete icon to clear a NRCM field
//  ✓  Validate risks with 12 CAB RCOP
//  ✓  Update Crews and Tail Numbers
//  ✓  Add UUID to crewmembers
//  ✓  Create aircrews database & implement it
//  ✓  Fetch flights on app load
//  ✓  Get flights into DB
//  ✓  Put request edit flights
//  ✓  Sort flights by flight date upon fetch
//  ✓  Change edit to icon
//  ✓  Add delete column & write functionality
//  ✓  Implement pool.connect on server instead of backendFunctions
//  ✓  Add react-snackbar for flight add, edit, and delete (probably from layout for Modal Tabs & FlightsList)
//  ✓  Figure out why snackbar for delete closes after a couple seconds, maybe move the state??
//  ✓  Form to add a new cremember
//  ✓  Implement add or edit toggle in crewmember form