import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api/';

// const fakeGroupId = '59a2fb718b2791187072843a';

class MeetupApi {
  constructor() {
    // this.groupId = fakeGroupId;
    this.path = 'http://rest.learncode.academy/api/ridhogusti/meetups';
  }

  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);

      return data;
    } catch (e) {
      console.log(e); 
    }
  }

  async createGroupMeetups(args) {
    try {
      // const res = await axios.post(`${this.path}/new`, { ...args });
      const res = await axios.post('http://rest.learncode.academy/api/ridhogusti/meetups', { ...args });
    } catch (e) {
      console.log(e);
    }
  }
}

export {
  MeetupApi,
};
