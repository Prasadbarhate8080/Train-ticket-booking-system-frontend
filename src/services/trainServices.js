
    class TrainServices {

        async getTrains({source,destination}) {

            try {

                const response = await fetch(`http://localhost:3000/api/v1/train/gettrains?source=${source}&destination=${destination}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error(`Fetching trains failed: ${response.statusText}`);
                }

                const trains = await response.json();
                return trains;

            } catch (error) {
                console.log("trainService :: getTrain :: error", error);
                throw error;
            }

        }


    async addTrains(trainData) {

        try {
            
            const response = await fetch("http://localhost:3000/api/v1/train/addtrain", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(trainData)
            });

            if (!response.ok) {
                throw new Error(`adding train failed: ${response.statusText}`);
            }

            const newTrain = await response.json();
            return newTrain;

        } catch (error) {
            console.log("trainService :: addtrain :: error", error);
            throw error;
        }

    }

}

const trainService = new TrainServices();

export {trainService};