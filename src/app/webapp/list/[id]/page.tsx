export default function Page({ params }: { params: { id: string } }) {
  console.log(params);
  return <div>Category: {params.id}</div>;
}
