// Mock test for priority feature
describe("Task Priority", () => {
  test("should set valid priority", () => {
    const task = new Task("Test", "Description");
    expect(task.setPriority("high")).toBe(true);
    expect(task.priority).toBe("high");
  });

  test("should not add more than 5 labels", () => {
    ["l1", "l2", "l3", "l4", "l5"].forEach((l) => task.addLabel(l));

    task.addLabel("l6");

    expect(task.labels.length).toBe(5);
    expect(task.labels).not.toContain("l6");
  });
});
