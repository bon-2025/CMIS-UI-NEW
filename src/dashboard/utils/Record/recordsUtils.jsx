// src/utils/recordsUtils.js
export const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

export const extendContract = (record) => {
  const oldEnd = new Date(record.contractEnd);
  const newEnd = new Date(oldEnd);
  newEnd.setFullYear(newEnd.getFullYear() + 1);

  return {
    ...record,
    status: "extended",
    contractEnd: newEnd.toISOString(),
  };
};
