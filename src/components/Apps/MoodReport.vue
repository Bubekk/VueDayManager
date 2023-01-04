<template>
    <div>
        <button v-for="month in months" :key="month.id" @click="showMoods(month.id)">{{ month.month }}</button>
    </div>
    <div>
        <p>Month: {{ this.selectedMonth }}</p>
        <!-- <table>
            <tr>
                <th v-for="id in days" :key="id">{{ id }}</th>
            </tr>
            <tr>
                <td v-for="id in dateMoods" :key="id">{{ id }}</td>
            </tr>
        </table> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            whichUser: localStorage.getItem('userId'),
            selectedMonth: "none",
            selectedDate: [],
            days: [],
            dateMoods: [],
            selectedMood: "none",
            moods: [],
            months: [
                {
                    id: 0,
                    month: "January",
                    monthValue: "01January"
                },
                {
                    id: 1,
                    month: "February",
                    monthValue: "02February"
                },
                {
                    id: 2,
                    month: "March",
                    monthValue: "03March"
                },
                {
                    id: 3,
                    month: "April",
                    monthValue: "04April"
                },
                {
                    id: 4,
                    month: "May",
                    monthValue: "05May"
                },
                {
                    id: 5,
                    month: "June",
                    monthValue: "06June"
                },
                {
                    id: 6,
                    month: "July",
                    monthValue: "07July"
                },
                {
                    id: 7,
                    month: "August",
                    monthValue: "08August"
                },
                {
                    id: 8,
                    month: "September",
                    monthValue: "09September"
                },
                {
                    id: 9,
                    month: "October",
                    monthValue: "10October"
                },
                {
                    id: 10,
                    month: "November",
                    monthValue: "11November"
                },
                {
                    id: 11,
                    month: "December",
                    monthValue: "12December"
                }
            ]
        }
    },
    methods: {
        showMoods(id) {
            // console.log(this.moods);
            // console.log(this.months[id]);
            // console.log(this.moods[0][this.months[id].monthValue][1].mood);
            this.selectedMonth = this.months[id].month;
            this.selectedDate = this.moods[0][this.months[id].monthValue];
            console.log(this.selectedDate)
            for (let i = 1; i < this.selectedDate.length; i++) {
                this.days.push(this.selectedDate[i].mood.day)
                this.dateMoods.push(this.selectedDate[i].mood.mood)
            }
        }
    },
    mounted: function () {
        fetch("https://day-manager-users-default-rtdb.firebaseio.com/users/" + this.whichUser + "/moodReport" + ".json").then(
            (response) => {
                return response.json();
            }).then((data) => {
                this.moods.push(data)
            });
    }
}
</script>