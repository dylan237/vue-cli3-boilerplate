import * as types from '@/store/mutations_type.js'

const state = {
  datePickerStartTime: '',
  datePickerEndTime: ''
}

const mutations = {
  [types.SETDATEPICKERDATE](state, payload) {
    state.datePickerStartTime = payload.starttime;
    state.datePickerEndTime = payload.endtime
  }
}

// usage - this.$store.dispatch('SETDATEPICKERDATE', { starttime:'', endtime:''})
const actions = {
  SETDATEPICKERDATE(context, payload) {
    context.commit('SETDATEPICKERDATE', payload)
  }
}

// usage - this.$store.getters.GETDATE
const getters = {
  GETDATE(state) {
    let obj = {
      starttime: new Date(state.datePickerStartTime).toLocaleDateString(),
      endtime: new Date(state.datePickerEndTime).toLocaleDateString()
    }
    return obj
  },
  GETORIGINDATA(state) {
    return {
      starttime: state.datePickerStartTime,
      endtime: state.datePickerEndTime,
    }
  }
}

export default {
    //namespaced: true,
    state,
    actions,
    mutations,
    getters
}
