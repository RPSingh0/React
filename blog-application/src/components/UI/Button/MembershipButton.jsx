function MembershipButton({type, current, setMembershipType, children}) {

    const isSelected = type === current;

    return (
        <button onClick={() => setMembershipType(type)}
                className={`px-6 py-3 bg-slate-300 first:rounded-tl-md last:rounded-tr-md first:rounded-bl-md last:rounded-br-md border-[1px] ${isSelected && 'font-bold bg-slate-500'}`}>
            {children}
        </button>
    );
}

export default MembershipButton;