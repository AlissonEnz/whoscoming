import { database } from '../config/firebase';

class FirebaseService {
  constructor() {
    this.db = database;
  }

  setData(path, data) {
    const ref = this.db.ref().child(path);
    ref.set(data);
  }

  pushData(path, data) {
    console.log(path, data);
    const ref = this.db.ref().child(path);
    ref.push(data);
  }

  updateData(path, data) {
    console.log(path, data);
    const ref = this.db.ref().child(path);
    ref.update(data);
  }

  updateListData(path, data) {
    const { event_id } = data;

    const guests = data.data;
    const updates = {};
    const parentKey = this.db.ref().push().key;

    guests.forEach((element, index) => {
      const { key } = database.ref().push();
      if (index === 0) {
        updates[`${event_id}/${parentKey}`] = {
          ...element,
          parent: ''
        };
      } else {
        updates[`${event_id}/${key}`] = {
          ...element,
          parent: parentKey
        };
      }
    });

    const ref = this.db.ref().child(path);
    ref.update(updates);
  }

  removeData(path) {
    console.log(path);
    const ref = this.db.ref(path);
    ref.remove();
  }
}

export default new FirebaseService();
