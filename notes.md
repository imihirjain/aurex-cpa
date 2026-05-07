{/_ Slider Container _/}

<div className="w-full overflow-hidden">
<div className="flex gap-4 animate-scroll">
{/_ Duplicate data for infinite loop _/}
{[...testiData, ...testiData].map((item, index) => (
<div key={index} className="min-w-75 shrink-0">
<TestiCard img={item.image} testi={item.review} />
</div>
))}
</div>
</div>

@keyframes scroll {
0% {
transform: translateX(0);
}

100% {
transform: translateX(-50%);
}
}

.animate-scroll {
animation: scroll 20s linear infinite;
}
