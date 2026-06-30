export default function AffiliateDisclosure() {
  return (
    <div className="bg-white/[0.02] border-b border-white/5 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.1em] text-white/40 font-medium">
          <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center">
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>
            Divulgation publicitaire : Ce site est une ressource gratuite qui reçoit des commissions de la part des marques présentées.
          </span>
        </div>
      </div>
    </div>
  );
}
