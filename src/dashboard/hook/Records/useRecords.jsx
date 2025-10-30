// src/hooks/useRecords.js
import { useEffect, useState } from "react";
import { updateRecord } from "../../service/Records/recordsService"; // Service for updating records
import { extendContract } from "../../utils/Record/recordsUtils"; // Utility to extend contract dates

/**
 * Custom React hook for managing records logic.
 * 
 * Handles:
 *  - Filtering and sorting of records
 *  - Modal state management (open/close actions)
 *  - Record updating (contract extension)
 *  - Archiving logic placeholder
 * 
 * @param {Array} initialRecords - Optional initial data (default empty array)
 * @returns {Object} - Methods and states for records management
 */
export const useRecords = (initialRecords = []) => {
  // Stores all fetched records
  const [allRecords, setAllRecords] = useState(initialRecords);

  // Stores filtered/sorted records for display
  const [filteredRecords, setFilteredRecords] = useState([]);

  // Stores the currently active filter (e.g. "all", "expired", "extended")
  const [filter, setFilter] = useState("all");

  // Manages modal state and the record currently being viewed/edited
  const [modalInfo, setModalInfo] = useState({
    show: false,  // Whether the modal is open
    action: "",   // Current action ("Extend", "Archive", etc.)
    record: null, // Record associated with modal
  });

  /**
   * When the initialRecords prop changes (e.g., from an API fetch),
   * update the internal state so the hook reflects new data.
   */
  useEffect(() => {
    setAllRecords(initialRecords);
  }, [initialRecords]);

  /**
   * Handles filtering and sorting logic.
   * Runs whenever `allRecords` or `filter` changes.
   */
  useEffect(() => {
    let updated = [...allRecords];

    // Apply filter logic
    if (filter !== "all") {
      updated = updated.filter((r) => {
        // Always include private contracts
        if (r.contractType?.toLowerCase().includes("private")) return true;
        // Otherwise, include only matching status
        return r.status === filter;
      });
    }

    // Sort records by createdDate (newest first)
    updated.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

    // Update state for display
    setFilteredRecords(updated);
  }, [allRecords, filter]);

  /**
   * Opens modal with a specific action (e.g., "Extend", "Archive") and selected record.
   */
  const openModal = (action, record) => 
    setModalInfo({ show: true, action, record });

  /**
   * Closes the modal and resets modal state.
   */
  const closeModal = () => 
    setModalInfo({ show: false, action: "", record: null });

  /**
   * Placeholder for record archiving logic.
   * Currently just logs to console.
   */
  const handleArchive = () => {
    console.log(`Archiving record ID ${modalInfo.record.id}`);
    closeModal();
  };

  /**
   * Handles record extension:
   * - Uses the `extendContract` util to compute new contract dates
   * - Calls API via `updateRecord` service
   * - Updates local state on success
   */
  const handleExtend = async () => {
    const record = modalInfo.record;
    const updatedRecord = extendContract(record);

    try {
      // Send PUT request to update record in backend
      await updateRecord(record.id, updatedRecord);

      // Update local state without refetching all records
      setAllRecords((prev) =>
        prev.map((r) => (r.id === record.id ? updatedRecord : r))
      );

      // Close modal after successful update
      closeModal();
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  /**
   * Expose state and methods for external components.
   */
  return {
    filteredRecords, // Filtered + sorted list for rendering
    filter,          // Current filter value
    setFilter,       // Function to update filter
    modalInfo,       // Modal state and selected record
    openModal,       // Function to show modal
    closeModal,      // Function to hide modal
    handleArchive,   // Archive logic handler
    handleExtend,    // Extend contract logic handler
  };
};
