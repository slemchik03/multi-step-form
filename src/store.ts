import { create } from 'zustand'

type IPlanLength = "month" | "year"
type ICurrentAddition = { id: number, title: string, describe: string, price: number }

interface IState {
    currentStep: number,
    changeCurrentStep: (step: number) => void,
    currentPlanId: number,
    changeCurrentPlanId: (plan: number) => void
    planLength: IPlanLength,
    changePlanLength: (len: IPlanLength) => void,
    currentAdditions: ICurrentAddition[],
    isFormConfirmed: boolean,
    setIsFormConfirmed: (value: boolean) => void,
    addCurrentAddition: (addition: ICurrentAddition) => void,
    removeCurrentAddition: (id: number) => void,
}


const useStore = create<IState>()((set) => ({
    currentStep: 1,
    changeCurrentStep: (step) => set(() => ({currentStep: step})),
    currentPlanId: 0,
    planLength: "month",
    currentAdditions: [],
    isFormConfirmed: false,
    changeCurrentPlanId: (id) => set(() => ({ currentPlanId: id })),
    changePlanLength: (len) => set(() => ({ planLength: len })),
    removeCurrentAddition: (id) => set(({ currentAdditions }) => (
        { currentAdditions: currentAdditions.filter((addition) => addition.id !== id) }
    )),
    addCurrentAddition: (addition) => set(({ currentAdditions }) => {
        // if input addon dosent exist set addon as new
        if (!currentAdditions.filter(({ id }) => id === addition.id)[0]) {
            return { currentAdditions: [...currentAdditions, addition] }
        }
        return { currentAdditions }
    }),
    setIsFormConfirmed: (value) => set(({ isFormConfirmed }) => ({ isFormConfirmed: value }))
}))

export default useStore;