"use client";

import { cloudinaryImageUrl } from "@/env";
import { deleteLeader, muteLeader } from "@/lib/actions/leadership.actions";
import { cleanText } from "@/lib/utils";
import { LeadershipCardType } from "@/types";
import { Award, Edit, Mail, Pause, Phone, Play, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import Load from "../loader";
import { siteConfig } from "@/config";

const LeadershipCard = ({
  leader,
  isDasboardMode,
}: {
  leader: LeadershipCardType;
  isDasboardMode: boolean;
}) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      key={leader.name}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={`${cloudinaryImageUrl}${leader.image}`}
          alt={`Portrait of ${leader.name}`}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
          <p className="text-app-blue/90 font-semibold">{leader.position}</p>
          {leader.experience && (
            <div className="flex items-center space-x-2 mt-2">
              <Award className="w-4 h-4" />
              <span className="text-sm">{leader.experience} experience</span>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Department Badge */}
        {leader.department && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-app-blue/10 border border-app-blue/20">
            <span className="text-sm font-semibold text-app-blue">
              {leader.department}
            </span>
          </div>
        )}

        {/* Qualifications */}
        {!isDasboardMode && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
              Qualifications
            </h4>
            <ul className="space-y-1">
              {leader.qualifications?.map((qualification, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-app-blue rounded-full mt-2 shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {qualification}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* About Section */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
            About
          </h4>
          <div className="text-gray-600 text-sm leading-relaxed">
            {cleanText(leader.about)}
          </div>
        </div>

        {/* Contact Information */}
        <div className="pt-4 border-t border-gray-200 space-y-2">
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="w-4 h-4 text-app-blue" />
            <span className="text-gray-600">
              {leader.email ?? siteConfig.email}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="w-4 h-4 text-app-blue" />
            <span className="text-gray-600">
              {leader.phone ?? siteConfig.phone}
            </span>
          </div>
          {isDasboardMode && !isPending && (
            <div className="flex items-center space-x-3 text-sm">
              <Link href={`/dashboard/admin/leadership/${leader.name}/edit`}>
                <Edit className="size-4" />
              </Link>

              <div
                className="cursor-pointer hover:text-app-blue"
                onClick={() =>
                  startTransition(async () => {
                    await muteLeader(leader.name, !leader.isMuted);
                  })
                }
              >
                {leader.isMuted ? (
                  <Play className="size-5 " />
                ) : (
                  <Pause className="size-5 cursor-pointer hover:text-app-blue" />
                )}
              </div>

              <Trash
                className="size-5 cursor-pointer text-red-500 hover:text-app-blue"
                onClick={() =>
                  startTransition(async () => {
                    await deleteLeader(leader.name);
                  })
                }
              />

              {isDasboardMode && (
                <div className="p-2 size-fit rounded-full bg-app-blue text-white text-xs">
                  {leader.isMuted ? "Muted" : "Unmuted"}
                </div>
              )}
            </div>
          )}
          {isPending && <Load />}
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
