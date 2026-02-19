// Task management module

const MAX_LABELS = 5;

class Task {
  constructor(title, description) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.status = "todo";
    this.createdAt = new Date();
    this.priority = "medium";
    this.labels = [];
  }

  updateStatus(status) {
    const validStatuses = ["todo", "in-progress", "done"];
    if (validStatuses.includes(status)) {
      this.status = status;
    }
  }

  setPriority(priority) {
    const validPriorities = ["low", "medium", "high", "urgent"];
    if (validPriorities.includes(priority)) {
      this.priority = priority;
      return true;
    }
    return false;
  }

  addLabel(label) {
    if (
      label &&
      !this.labels.includes(label) &&
      this.labels.length < MAX_LABELS
    ) {
      this.labels.push(label);
    }
  }
}

module.exports = Task;
