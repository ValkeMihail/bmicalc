
interface BMITipsProps {
    bmi: number;
  }
const BMITips = ({ bmi }: BMITipsProps) => {
    let tips = null;
    if (bmi < 18.5) {
        tips = (
            <>
                <p>Eat more frequently and don't skip meals.</p>
                <p>Include more carbohydrates and healthy fats in your diet.</p>
                <p>Do resistance training to build muscle.</p>
            </>
        );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        tips = (
            <>
                <p>Maintain a balanced diet with plenty of fruits, vegetables, and whole grains.</p>
                <p>Engage in regular physical activity, such as brisk walking or cycling.</p>
                <p>Get enough sleep and manage stress levels.</p>
            </>
        );
    } else if (bmi >= 25 && bmi <= 29.9) {
        tips = (
            <>
                <p>Reduce portion sizes and limit intake of high-calorie foods.</p>
                <p>Increase physical activity and try to get at least 30 minutes of moderate exercise most days of the week.</p>
                <p>Avoid sugary drinks and limit alcohol consumption.</p>
            </>
        );
    } else {
        tips = (
            <>
                <p>Seek medical advice to manage your weight and associated health risks.</p>
                <p>Focus on long-term lifestyle changes, including diet and physical activity.</p>
                <p>Consider joining a support group or working with a healthcare professional to help you achieve your weight loss goals.</p>
            </>
        );
    }

    return (
        <>
            <h2>Tips for a healthier you</h2>
            {tips}
        </>
    );
};

export default BMITips;