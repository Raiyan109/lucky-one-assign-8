import React from 'react';

const QA = () => {
    return (
        <div>
            <h1>How does React Works </h1>
            <p> React declarative code এ কাজ করে।  </p>
            <p>মূলত, React একটা tree provide করে। এই tree টি node এ diff algorithm করতে সক্ষম ।</p>
            <p>React এর একটা  virtual DOM আছে। এটা সে  real DOM এর পাশাপাশি তৈরি করে।</p>
            <p> আমরা যখন কোন ডাটা চেঞ্জ করি তখন সে virtual DOM এবং real DOM কে compare করে দেখে।</p>
            <p> যে, এই দুইটা জিনিসের মধ্যে পার্থক্য কী, আমার কোন জিনিসটা চেঞ্জ করা লাগবে।</p>

            <hr />
            <h1>Difference between State and Props</h1>

            <p> props এবং state এর মধ্যে মূল পার্থক্য হলো , state হচ্ছে internal এবং component এর দ্বারাই নিয়ন্ত্রিত হয়। </p>
            <p> আর props হচ্ছে external এবং component কে যেই render করে তার দ্বারাই নিয়ন্ত্রিত হয়। </p>
            <p> অর্থাৎ , state হল কোন একটা component এর জন্যই একান্তভাবে বানানো হয়। </p>
            <p>এবং কেবল ওই component এর ভিতরেই তাকে পরিবর্তন - পরিবর্ধন করা যায়। </p>
            <p>আর props হল একটা static value মাত্র। এবং এটা child component এর জন্য parent component এর পক্ষ থেকে key হিসেবে কাজ করে। </p>
            <p> এবং props কে child component এর ভিতর পরিবর্তন করা যায় না। </p>
        </div>
    );
};

export default QA;